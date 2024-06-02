import React from 'react';

import dummyLogo from "../../assets/dummylogo.png";
import CustomButton from '../../components/customButton';
import { FrontOne } from '../../components/cards/One/front';
import { Button } from '../../components/button';

const Editor = ({ onClickBack }: ICommonProps) => {



    const onGoBackTemplate = () => {
        onClickBack?.()
    }

    const handleContinue = () => {

    }

    return (
        <div className="w-full flex flex-col h-screen ">
            <div className="flex justify-between items-center w-full">
                <div>
                    <img
                        className="object-contain"
                        src={dummyLogo}
                        style={{ width: '120px', height: '120px', marginTop: 0, }}
                    />
                </div>
                <div className="flex space-x-4">
                    <Button label="Go Back" varient="outlined" attributes={{ onClick: onGoBackTemplate }} />
                    <Button label="Continue" varient="primary" attributes={{ onClick: handleContinue }} />
                </div>
            </div>

            <div>
                <FrontOne />
            </div>
        </div>
    );
}
export default Editor;

