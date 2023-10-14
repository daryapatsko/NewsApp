import React, { useEffect } from 'react'
import {
    StyledModalContainer,
    StyledModalBox,
    StyledModal,
    StyledModalBtnClose,
    StyledModalImgBox,
    StyledModalLink,
    StyledModalTitle,
    StyledModalDescription
} from './styled'
import { Link } from 'react-router-dom'


interface IModal {
    item: any,
    closeModal: () => void
}


const Modal = ({ item, closeModal }: IModal) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])
    return (
        <StyledModalContainer>
            <StyledModalBox>
                <StyledModal>
                    <StyledModalImgBox src={item.urlToImage} alt={item.title} />
                    <StyledModalLink><Link to={item.url}>{item.source.name}</Link></StyledModalLink>
                    
                    <StyledModalTitle>{item.title}</StyledModalTitle>
                    <StyledModalDescription>{item.description}</StyledModalDescription>
                    
                    <StyledModalLink><Link to={item.url}>
                        Read full article on the site...</Link></StyledModalLink>
                    < StyledModalBtnClose onClick={closeModal}>Close</StyledModalBtnClose>
                </StyledModal>
            </StyledModalBox>

        </StyledModalContainer>
    )
}

export default Modal
