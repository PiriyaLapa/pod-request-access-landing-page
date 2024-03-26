import { Component,ReactNode } from "react";
import {StyledPrimaryBtn} from '../../styles/styles';
import { PrimaryBtnProps } from "../../interface/interface";

export default class PrimaryBtn extends Component<PrimaryBtnProps>{
    render():ReactNode{
        const {btnMessage} = this.props;
        return (
            <StyledPrimaryBtn type="submit">{btnMessage}</StyledPrimaryBtn>
        )
    }
}