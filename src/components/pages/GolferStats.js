import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useFetch from 'react-fetch-hook';

function GolferStats() {

    // const [data, setData] = React.useState();
    const { isLoading, error, data } = useFetch("https://opensheet.elk.sh/1dHjk2lOjjZyDkUgp7AA0wf2NAu67cTG4jwiH5zNEBqA/1")
    // setData(jsondata);
    if (isLoading) return "Loading....";
    if (error) return "Error!";


    return (
        <Container>
            <Table striped hover>
                <thead>
                    <tr key={"header"}>
                        {Object.keys(data[0]).map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            {Object.values(item).map((val) => (
                                <td>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Container>
    )
}

export default GolferStats
