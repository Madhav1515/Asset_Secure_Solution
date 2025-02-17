import React, { Component } from "react";
import Layout from "../components/Layout";
import { Link } from "../routes";
import { Card, Button, Container } from "semantic-ui-react";


class HomePage extends Component {
    render() {
        return (
            <Layout>
                
                <Card>
                    <Container >
                        <div className="image" >
                            <img  src="https://www.shutterstock.com/image-vector/blockchain-technology-modern-icon-vector-600nw-781904134.jpg" alt="User Avatar" />
                        </div>
                    </Container>

                </Card>
                <Link  route="campaigns/compaign">
                    <a>
                        <Button
                            content="All Projects"
                            secondary
                            
                        />
                    </a>
                </Link>
            </Layout >
        );
    }
}
export default HomePage;