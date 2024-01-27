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
import { IModal } from '../../interfaces'




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
                    <StyledModalImgBox src={item.image} alt={item.title} />
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
