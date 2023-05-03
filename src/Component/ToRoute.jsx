import styled from "styled-components";
import { SideIcons } from './SideIcons';
import { TopBar } from './TopBar';
import { MenuBar } from './MenuBar';
import {Outlet} from 'react-router-dom';

export const Index = () => {

    const DIV = styled.div`
    display: flex;
    `;

    const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 98vh;
    `;

    return (
        <DIV>
            <SideIcons />
            <MenuWrapper>
                <TopBar />
                <MenuBar />
            </MenuWrapper> 
            <Outlet />
        </DIV>

    )
}