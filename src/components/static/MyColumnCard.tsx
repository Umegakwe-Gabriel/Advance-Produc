import React from 'react'
import InputScreen from '../../pages/InputScreen';
import InnerSteps from './InnerSteps';
import styled from 'styled-components';
import {BiAlarmAdd} from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux';
import { changeToggleToFalse, changeToggleToTrue } from '../../global/GlobalState';

export interface iCard{
    title?: string;
    icon?: boolean;
    data?: [];
}

const MyColumnCard: React.FC<iCard> = ({title, icon, data}) => {
    const toggle = useSelector((state: any)=>state.toggle)
    const dispatch = useDispatch()

  return (
    <CardColumn>
        <Title>
            <span>{title}</span>
            {
                icon && <div>
                    {
                        toggle ? <Icon onClick={()=>{
                            dispatch(changeToggleToFalse())
                        }}/> : <Icon onClick={()=>{
                            dispatch(changeToggleToTrue())
                        }}/>
                    }
                </div>
            }
            </Title>

            {
                (icon && toggle) && <InputScreen/>
            }

            {
                data?.map((props : any)=>(
                    <div key={props._id}>
                
            <Card>
                <Holder>
                    <Avatar src={props.avatar}/>
                    <Name>
                        <TaskName>{props.task}</TaskName>
                        <UserName>{props.name}</UserName>
                    </Name>
                </Holder>

                <ButtonHolder>
                    <Button bg='purple'>step</Button>
                    <Button bg='dogerblue'>Start</Button>
                    <Button bg='#720a34'>Delete</Button>
                </ButtonHolder>
            </Card>

            <InnerSteps id={props._id}/>
            </div>
                ))
            }

    </CardColumn>
  )
}

export default MyColumnCard;

const Icon = styled(BiAlarmAdd)`
font-size: 25px;
color: #340134;
`
const Title = styled.div`
margin: 10px 0;
display: flex;
align-items: center;
justify-content: space-between;
`
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
border: 1px solid #1c001c;
object-fit: cover;
`
const TaskName = styled.div`
font-size: 14px;
width: 160px;
word-wrap: break-word;
`
const UserName = styled.div`
font-size: 10px;
font-weight: 600;
`
const Name = styled.div`
margin-left: 5px;
`
const Holder = styled.div`
display: flex;
margin-top: 5px;
`

const Button = styled.div<{bg?: string}>`
width: 50px;
height: 30px;
margin: 5px 0;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bg})=>bg};
font-size: 12px;
border-radius: 3px;
color: white;
`
const ButtonHolder = styled.div`
`

const Card = styled.div<{bg?: string, w?: string}>`
width: ${({w})=> w ? "97%" : "85%"};
min-height: 80px;
border: 1px solid #a49aa4;
border-radius: 5px;
background-color: ${({bg})=> bg};
color: #1c001c;
display: flex;
padding: 5px;
justify-content: space-between;
margin: 5px 0;
`
const CardColumn = styled.div`
border: 1px solid silver;
width: 280px;
min-height: 300px;
border-radius: 5px;
padding: 10px;
margin: 0 5px;
`