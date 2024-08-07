import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';
import Link from 'next/link';
import Matric from '../shared/Matric';
import RenderTag from '../shared/RenderTag';

const QuestionCard = ({
    _id,
    title,
    tags,
    author,
    upVotes,
    views,
    answers,
    createdAt,
}: {
    _id: string;
    title: string;
    tags: {
        _id: string;
        name: string;
    }[];
    author: {
        _id: string;
        name: string;
        picture: string;
    };
    upVotes: number;
    views: number;
    answers: Array<Object>;
    createdAt: Date;
}) => {
    return (
        <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
            <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
                <div>
                    <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
                        {getTimestamp(createdAt)}
                    </span>
                    <Link href={`/question/${_id}`}>
                        <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
                            {title}
                        </h3>
                    </Link>
                </div>
            </div>
            {/* if signed in add edit delete actions */}

            <div className="mt-3.5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
                ))}
            </div>

            <div className="flex-between mt-6 w-full flex-wrap gap-3">
                <Matric
                    imgUrl="/assets/icons/avatar.svg"
                    alt="User"
                    value={author.name}
                    title={` - asked ${getTimestamp(createdAt)}`}
                    href={`/profile/${author._id}`}
                    isAuthor
                    textStyles="small-medium text-dark400_light800"
                />
                <Matric
                    imgUrl="/assets/icons/like.svg"
                    alt="Upvotes"
                    value={formatAndDivideNumber(upVotes)}
                    title=" Votes"
                    textStyles="small-medium text-dark400_light800"
                />
                <Matric
                    imgUrl="/assets/icons/message.svg"
                    alt="Upvotes"
                    value={formatAndDivideNumber(answers.length)}
                    title=" Answers"
                    textStyles="small-medium text-dark400_light800"
                />
                <Matric
                    imgUrl="/assets/icons/eye.svg"
                    alt="Views"
                    value={formatAndDivideNumber(views)}
                    title=" Views "
                    textStyles="small-medium text-dark400_light800"
                />
            </div>
        </div>
    );
};

export default QuestionCard;
