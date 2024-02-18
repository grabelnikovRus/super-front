import { ChangeEvent, useState } from "react";
import { BottomSheet, Button, Modal, StarRating } from "@shared/ui";
import { useDevice } from "@shared/hooks/useDevice";

import s from "./RatingCard.module.scss";

export interface OnAcceptProps { 
   rate?: number
   feedback?: string
}

interface RatingCardProps {
   gradeRating?: number
   title?: string
   hasFeedback?: boolean
   titleFeedback?: string
   onAccept?: (arg: OnAcceptProps) => void
}

export const RatingCard = ({
   gradeRating,
   title,
   titleFeedback,
   hasFeedback = false,
   onAccept,
}: RatingCardProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const [feedback, setFeedback] = useState("")
   const isMobile = useDevice()

   const onClickStar = (rate: number) => {
      hasFeedback && setIsOpen(true);
      onAccept?.({ rate })
   }

   const onClose = () => {
      setIsOpen(false);
   }

   const onChange = (e: ChangeEvent<HTMLTextAreaElement> ) => {
      setFeedback(e.target.value)
   }

   const sendFeedback = () => {
      onAccept?.({ feedback })
      setIsOpen(false);
   }

   const Content = (<>
     {titleFeedback && <h3>{titleFeedback}</h3>}
     <textarea className={s.card__text} value={feedback} onChange={onChange}/>
     <Button onClick={sendFeedback}>Отправить</Button>
   </>)

   return (
      <div className={s.card}>
         {isMobile ? (<>
            {title && <span>{title}</span>}
            <StarRating gradeRating={gradeRating} setGradeRating={onClickStar} />
            <BottomSheet isOpen={isOpen} onClose={onClose}>
              {Content}
            </BottomSheet>
         </>) : (<>
            {title && <span>{title}</span>}
            <StarRating gradeRating={gradeRating} setGradeRating={onClickStar} />
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
