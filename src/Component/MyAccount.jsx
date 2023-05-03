import styled from "styled-components";

import BgImage from "./images/bg.webp";
import UserImg from "./images/User.svg";

import { Image, Input, Button } from "@chakra-ui/react";


export const MyAccount = () => {

    const MyAccountWrapper = styled.div`
        background-color: white;
        width: 870px;
        border-radius: 0 8px 8px 0;
    `;

    const MyAccountComponent = styled.div`
        
    `;

    const Heading = styled.div`
        padding: 16px 24px;
        border-bottom: 1px solid #D0D5DD;

        h2{
            font-weight: 700;
            font-size: 18px;
            color: #344054;
        }
    `;

    const AccountContent = styled.div`
        
    `;

    const BackgroundBox = styled.div`
        margin: 7px;
        border-radius: 8px 8px 0 0;
        background-image: url(${BgImage});
        width: 856px;
        height: 200px;
        position: relative;
    `;

    const PersonelInfo = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const MyNameWrapper = styled.div`
        position: relative;
        height: 70px;
    `

    const MyName = styled.div`
        position: absolute;
        left: 190px;
        height: 100px;

        span{
            font-size: 30px;
            font-weight: 600px;
            line-height: 38px;
            color: #101828;
        }
        p{
            font-weight: 400;
            font-size: 16px;
            color: #475467;
            line-height: 24px;
        }

    `;

    const InputField = styled.div`  
        padding: 30px;
        display: flex;
        width: 100%;
        height: 212px;

    `;

    const InputText = styled.div`
        padding-right: 20px;
        span{
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            color: #344054;
        }
        p{
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #475467;
        }
    `;

    const InputBox = styled.div`
        padding: 24px;
    `;

    const IfullName = styled.div`
    padding-bottom: 12px;
        p{
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            padding-bottom: 8px;
        }
    `;

    const EmailAddress = styled.div`
        p{
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            padding-bottom: 8px;
        }
    `;

    const Password = styled.div`
        padding: 30px;
        display: flex;
        align-items: center;
    `;

    const PasswordText = styled.div`
        padding-right: 32px;

        span{
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #344054;
        }

        p{
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #6E6681;
        }
    `;

    const PasswordButton = styled.div`
        
    `;

    const MyButton = styled(Button)`
        font-weight: 600;
        
        line-height: 20px;
        color: blue;
    `;


    return (
        <MyAccountWrapper>
            <MyAccountComponent>
                <Heading>
                    <h2>My account</h2>
                </Heading>
                <AccountContent>
                    <BackgroundBox>
                        <Image boxSize='160px' src={UserImg} borderRadius='50%' position="absolute" bottom='-90px' left='15px' />
                    </BackgroundBox>
                    <PersonelInfo>
                        <MyNameWrapper>
                            <MyName>
                                <span>Olivia Rhye</span>
                                <p>olivia@calilio.com</p>
                            </MyName>
                        </MyNameWrapper>
                        <InputField>
                            <InputText>
                                <span>Personel info</span>
                                <p>Update your personal details.</p>
                            </InputText>
                            <InputBox>
                                <IfullName>
                                    <p>Full name</p>
                                    <Input placeholder='Your name' padding="10px 14px" width="521px" height= "44px" />
                                </IfullName>
                                <EmailAddress>
                                    <p>Email address</p>
                                    <Input placeholder='Your email' padding="10px 14px" width="521px" height= "44px" />
                                </EmailAddress>
                            </InputBox>
                        </InputField>
                        <Password>
                            <PasswordText>
                                <span>Password</span>
                                <p>Choose a strong password</p>
                            </PasswordText>
                            <PasswordButton>
                                <MyButton fontSize= '14px'>Change Password</MyButton>
                            </PasswordButton>
                        </Password>
                    </PersonelInfo>
                </AccountContent>
            </MyAccountComponent>
        </MyAccountWrapper>
    )
}