import * as React from "react";
import { StyledLogo } from "../../styles/styles";

export default class Logo extends React.Component {
  public render(): React.ReactNode {
    return (
      <StyledLogo>
        <svg width="135" height="56" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M28 0c15.464 0 28 12.536 28 28S43.464 56 28 56 0 43.464 0 28 12.536 0 28 0zm-4.8 13.827c-1.535 0-2.758 1.048-2.979 2.553l-2.345 16.28c-.011.076-.04.274-.32.287-.269.011-.322-.172-.34-.25l-.758-3.34a.631.631 0 00-.004-.015c-.492-2.056-2.337-3.548-4.388-3.548-.745 0-1.35.598-1.35 1.337 0 .738.605 1.337 1.35 1.337.798 0 1.553.637 1.759 1.484l.757 3.339.004.015c.34 1.426 1.612 2.377 3.09 2.312 1.479-.065 2.66-1.123 2.873-2.576l2.345-16.281c.013-.084.038-.26.303-.26l.09.008c.182.035.203.178.213.251l3.293 22.812c.223 1.538 1.464 2.6 3.025 2.6h.052c1.585-.023 2.817-1.13 2.996-2.69l.46-4.046a1.34 1.34 0 00-1.192-1.478 1.347 1.347 0 00-1.492 1.18l-.46 4.044c-.01.085-.035.312-.353.317-.315.006-.35-.222-.362-.306l-3.293-22.812c-.218-1.502-1.441-2.553-2.974-2.554zm11.202 9.159c-1.4.036-2.486 1.023-2.643 2.4l-.572 5.004a1.34 1.34 0 001.19 1.479 1.347 1.347 0 001.493-1.178l.572-5.005a.281.281 0 01.004-.024.152.152 0 01.053-.002.228.228 0 01.005.021l1.06 6.401c.228 1.36 1.36 2.346 2.75 2.4l.119.003c1.34 0 2.486-.883 2.812-2.182l.004-.016.477-2.003c.264-1.036 1.211-1.816 2.208-1.816.745 0 1.35-.599 1.35-1.337 0-.739-.605-1.337-1.35-1.337-2.239 0-4.27 1.62-4.83 3.852l-.004.016-.477 2.003c-.016.063-.045.151-.203.145-.165-.006-.182-.103-.192-.164l-1.06-6.4c-.23-1.368-1.367-2.298-2.766-2.26z"
              fill="#54E6AF"
            />
            <path
              d="M74.97 45.806V36.31c.58.765 1.352 1.411 2.314 1.939.963.528 2.077.791 3.342.791 1.477 0 2.802-.382 3.975-1.147 1.174-.765 2.103-1.913 2.789-3.443.685-1.53 1.028-3.39 1.028-5.58v-.435c0-2.295-.37-4.22-1.107-5.777-.739-1.557-1.74-2.717-3.006-3.482-1.266-.765-2.69-1.148-4.272-1.148-2.32 0-4.219.976-5.695 2.928l-.593-2.532h-4.549v27.383h5.775zm3.798-10.961c-1.108 0-2.018-.416-2.73-1.247-.711-.83-1.067-2.011-1.067-3.541v-3.285c0-1.556.356-2.743 1.068-3.561.711-.818 1.621-1.227 2.729-1.227 1.107 0 2.017.41 2.729 1.227.712.818 1.067 2.005 1.067 3.561v3.285c0 1.53-.355 2.71-1.067 3.541s-1.622 1.247-2.73 1.247zm23.572 4.194c1.872 0 3.56-.395 5.062-1.187 1.503-.791 2.683-1.939 3.54-3.442.857-1.504 1.286-3.272 1.286-5.303v-1.148c0-2.03-.429-3.798-1.286-5.302-.857-1.504-2.037-2.651-3.54-3.443-1.503-.791-3.19-1.187-5.062-1.187h-.633c-1.872 0-3.56.396-5.062 1.187-1.503.792-2.683 1.94-3.54 3.443-.857 1.504-1.286 3.271-1.286 5.302v1.148c0 2.031.429 3.799 1.286 5.303.857 1.503 2.037 2.65 3.54 3.442 1.503.792 3.19 1.187 5.062 1.187h.633zm-.317-3.957c-1.291 0-2.34-.422-3.144-1.266-.804-.844-1.206-2.07-1.206-3.68V26.93c0-1.61.402-2.836 1.206-3.68.804-.845 1.853-1.267 3.144-1.267 1.292 0 2.34.422 3.145 1.266.804.845 1.206 2.071 1.206 3.68v3.206c0 1.61-.402 2.836-1.206 3.68-.804.844-1.853 1.266-3.145 1.266zm21.99 3.957c2.321 0 4.22-.976 5.696-2.928l.593 2.533h4.549V10.152h-5.775v10.605c-.58-.765-1.351-1.41-2.313-1.939-.963-.527-2.077-.791-3.342-.791-1.477 0-2.802.383-3.975 1.148-1.174.765-2.103 1.912-2.789 3.442-.685 1.53-1.028 3.39-1.028 5.58v.435c0 2.295.37 4.221 1.107 5.778.739 1.556 1.74 2.717 3.006 3.482 1.266.765 2.69 1.147 4.272 1.147zm1.266-3.957c-1.107 0-2.017-.415-2.729-1.246-.712-.831-1.067-2.012-1.067-3.542V27.01c0-1.557.355-2.744 1.067-3.562.712-.818 1.622-1.226 2.73-1.226 1.107 0 2.017.408 2.728 1.226.712.818 1.068 2.005 1.068 3.562v3.284c0 1.53-.356 2.71-1.068 3.542-.711.83-1.621 1.246-2.729 1.246z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </g>
        </svg>
      </StyledLogo>
    );
  }
}
