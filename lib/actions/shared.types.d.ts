import { Schema } from 'mongoose';

import { IUser } from '@/mongodb';

export interface CreateQuestionParams {
    title: string;
    content: string;
    tags: string[];
    author: Schema.Types.ObjectId | IUser;
    path: string;
}

export interface GetQuestionByIdParams {
    questionId: string;
}

export interface GetQuestionsParams {
    page?: number;
    pageSize?: number;
    searchQuery?: string;
    filter?: string;
}
