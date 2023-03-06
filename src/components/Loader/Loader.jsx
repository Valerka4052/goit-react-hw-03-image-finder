import { BallTriangle } from 'react-loader-spinner'
import { Container } from './Loader.styled'

export function Loader() {
    return (
        <Container>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </Container>
    );
};