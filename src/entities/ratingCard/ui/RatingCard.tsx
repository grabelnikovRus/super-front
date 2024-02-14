import { useState } from "react";
import { Button, Modal, StarRating } from "@shared/ui";

import s from "./RatingCard.module.scss";

interface RatingCardProps {
   title?: string
   hasFeedback?: boolean
   titleFeedback?: string
   onAccept?: (num: number) => void
}

export const RatingCard = ({
   title,
   titleFeedback,
   hasFeedback = false,
   onAccept,
}: RatingCardProps) => {
   const [isOpen, setIsOpen] = useState(false);

   const onClickStar = (num: number) => {
      hasFeedback && setIsOpen(true);
      onAccept?.(num)
   }

   const onClose = () => {
      setIsOpen(false);
   }

   return (
      <div className={s.card}>
         {title && <span>{title}</span>}
         <StarRating setGradeRating={onClickStar} />
         <Modal 
           containerMount={document.body} 
           isOpen={isOpen} 
           onClose={onClose} 
           classes={{ wrapperContent: s.root__content }}
         >
            {titleFeedback && <h3>{titleFeedback}</h3>}
            <textarea className={s.card__text}/>
            <Button>Отправить</Button>
         </Modal>
      </div>
   );
}
