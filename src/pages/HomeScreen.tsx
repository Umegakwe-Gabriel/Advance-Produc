import React from 'react'
import MyColumnCard from '../components/static/MyColumnCard'
import styled from 'styled-components';
import { readTask } from '../utils/taskAPI';
import {useQuery} from "@tanstack/react-query"

const HomeScreen = () => {

    const {data} = useQuery({
        queryKey: ["tasks"],
        queryFn: readTask,
        refetchInterval: 1000
    })

  return (
    <div>
        <Container>
            <Main>
                <MyColumnCard title='Task' icon data={data}/>
                <MyColumnCard title='Progress'/>
            </Main>
        </Container>
    </div>
  )
}

export default HomeScreen;

const Main = styled.div`
display: flex;
justify-content: center;
width: 100%;
`
const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
padding-top: 50px;
`