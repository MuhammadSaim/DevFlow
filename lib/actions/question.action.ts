'use server';

import Question from '@/database/question.model';
import Tag from '@/database/tag.model';
import User from '@/database/user.mode';
import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '../mongoose';
import { CreateQuestionParams, GetQuestionsParams } from './shared.types';

/**
 * create a quetsion by the data
 * @param params
 */
export async function createQuestion(params: CreateQuestionParams) {
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
            const existingTag = await Tag.findOneAndUpdate(
                {
                    name: {
                        $regex: new RegExp(`^${tag}$`, 'i'),
                    },
                },
                {
                    $setOnInsert: { name: tag },
                    $addToSet: {
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
            $addToSet: { tags: { $each: tagDocuments } },
        });

        revalidatePath(path);
    } catch (error) {
        console.log(error);
    }
}

export async function getQuestion(params: GetQuestionsParams) {
    try {
        connectToDatabase();

        const questions = await Question.find({})
            .populate({
                path: 'tags',
                model: Tag,
            })
            .populate({
                path: 'author',
                model: User,
            })
            .sort({ createdAt: -1 });

        return { questions };
    } catch (error) {
        console.log(error);
    }
}
