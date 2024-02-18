import { MouseEvent, useEffect, useState } from "react";
import Star from "../../assest/icon/star.svg"
import { classNames } from "../../helpers/lib";

import s from "./StarRating.module.scss";

interface StarRatingProps {
   gradeRating?: number
   setGradeRating?: (num: number) => void
}

export const StarRating = ({ gradeRating, setGradeRating }: StarRatingProps) => {
   const [rating, setRating] = useState(gradeRating ?? 0)
   const [hovered, setHovered] = useState(0)

   const isUse = gradeRating && gradeRating > 0

   const onClickStar = (num: number) => () => {
      if (isUse) return

      setRating(num)
      setGradeRating?.(num)
   }

   const onHover = (num?: number) => ({ type }: MouseEvent)=> {
      if (isUse) return

      if (type === "mouseleave") {
         setHovered(0)
         return
      }

      num && setHovered(num)
   }

   useEffect(() => {
      if (gradeRating && gradeRating > 0) setRating(gradeRating)
   }, [gradeRating])

   return (
      <div className={s.root}>
         {new Array(5).fill("").map((_, i) => (
            <Star 
               onClick={onClickStar(i + 1)} 
               onMouseEnter={onHover(i + 1)}
               onMouseLeave={onHover()}
               className={classNames(s.root__star, { 
                  [s.active]: rating >= i + 1,
                  [s.hover]: hovered >= i + 1,
               })} 
               key={i}
            />
         ))}
      </div>
   );
}
