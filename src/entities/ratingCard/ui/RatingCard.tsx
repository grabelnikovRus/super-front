import { useState } from "react";
import { BottomSheet, Button, Modal, StarRating } from "@shared/ui";
import { useDevice } from "@shared/hooks/useDevice";

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
   const isMobile = useDevice()

   const onClickStar = (num: number) => {
      hasFeedback && setIsOpen(true);
      onAccept?.(num)
   }

   const onClose = () => {
      setIsOpen(false);
   }

   const Content = (<>
     {titleFeedback && <h3>{titleFeedback}</h3>}
     <textarea className={s.card__text}/>
     <Button>Отправить</Button>
   </>)

   return (
      <div className={s.card}>
         {isMobile ? (<>
            {title && <span>{title}</span>}
            <StarRating setGradeRating={onClickStar} />
            <BottomSheet isOpen={isOpen} onClose={onClose}>
              {Content}
            </BottomSheet>
         </>) : (<>
            {title && <span>{title}</span>}
            <StarRating setGradeRating={onClickStar} />
            <Modal 
              containerMount={document.body} 
              isOpen={isOpen} 
              onClose={onClose} 
              classes={{ wrapperContent: s.root__content }}
            >
              {Content}
            </Modal>
         </>)}
      </div>
   );
}
