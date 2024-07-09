'use server';

import Question from '@/database/question.model';
import Tag from '@/database/tag.model';
import { connectToDatabase } from '../mongoose';

export async function createQuestion(params: any) {
    try {
        connectToDatabase();

        const { title, content, tags, author, path } = params;

        // create a question
        const question = await Question.create({
            title,
            content,
            author,
        });

        const tagDocuments = [];

        // create the tags
        for (const tag of tags) {
            const existingTag = await Tag.findByIdAndUpdate(
                {
                    name: {
                        $regex: new RegExp(`^${tag}$`, 'i'),
                    },
                },
                {
                    $setOnInsert: { name: tag },
                    $push: {
                        question: question._id,
                    },
                },
                {
                    upsert: true,
                    new: true,
                },
            );
            tagDocuments.push(existingTag._id);
        }

        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: { $each: tagDocuments } },
        });
    } catch (error) {
        console.log(error);
    }
}
