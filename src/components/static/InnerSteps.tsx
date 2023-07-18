import React, { useEffect, useState } from 'react'
import { readStep } from '../../utils/stepAPI';
import styled from 'styled-components';

interface iID {
    id?: string;
}

const InnerSteps: React.FC<iID> = ({id}) => {
    const [state, setState] = useState<any>([])

    useEffect(()=>{
        readStep(id!).then((res: any)=>{
            setState(res)
        })
    }, [])
    console.log("we are reading steps: ", state);
    
  return ( 
    <div>
        {
            state?.step?.map((props: any)=>(
                <MyCard key={props._id}>
            <Card bg='#ebdbe1'>
                <Holder>
                    <Avatar src={props.assignedAvatar}/>
                    <Name>
                        <TaskName>{props.assignedTask}</TaskName>
                        <UserName>{props.assignedName}</UserName>
                    </Name>
                </Holder>
            </Card>
        </MyCard>
            ))
        }
    </div>
  )
}

export default InnerSteps;

const UserName =  styled.div`
font-size: 10px;
font-weight: 60;
`
const TaskName =  styled.div`
font-size: 14px;
width: 160px;
word-wrap: break-word;
`
const Name =  styled.div`
margin-left: 5px;
`
const Avatar =  styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
border: 1px solid #1c001c;
object-fit: cover;
`
const Holder =  styled.div`
display: flex;
margin-top: 5px;
`
const Card =  styled.div<{bg?: string, w?: string}>`
width: ${({w})=> w ? "97%" : "85%"};
min-height: 80px;
border: 1px solid #a49aa4;
border-radius: 5px;
background-color: ${({bg})=>bg};
color: #1c001c;
display: flex;
padding: 5px;
justify-content: space-between;
margin: 5px 0;
`
const MyCard =  styled.div`
display: flex;
justify-content: flex-end;
`