import { OnAcceptProps, RatingCard } from "@entities/ratingCard"
import { 
    ArticleRatingArg, 
    useGetArticleRatingQuery, 
    useSetArticleRatingMutation 
} from "../api"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getAuthData } from "@entities/user"
import { Skeleton } from "@shared/ui"

interface ArticleRatingProps {
    articleId: string
}

export const ArticleRating = ({ articleId }: ArticleRatingProps) => {
    const userData = useSelector(getAuthData)

    const { 
        isLoading, 
        data
    } = useGetArticleRatingQuery({ articleId, userId: userData?.id ?? "" })

    const [setArticleRating] = useSetArticleRatingMutation();

    const onAccept = (arg: ArticleRatingArg) => (arg2: OnAcceptProps) => {
        setArticleRating({...arg, ...arg2})
    }

    const { t } = useTranslation("articles")

    if (isLoading) return <Skeleton />

    return (
        <RatingCard
          gradeRating={data?.[0]?.rate}
          hasFeedback
          title={t("rate_article") || ""}
          titleFeedback={t("rate_article") || ""}
          onAccept={onAccept({ articleId, userId: userData?.id ?? "" })}
        />
    )
}