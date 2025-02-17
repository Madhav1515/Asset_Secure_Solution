import React, { Component } from "react";
import { Card, Button, img } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import Layout from "../../components/Layout";
import { Link } from "../../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const cards = this.props.campaigns.map((address) => (
      <Card key={address}>
        <div className="image">
          <img src="https://as1.ftcdn.net/v2/jpg/01/02/26/88/1000_F_102268826_JMpHgmEJq9RjRpVibF1QngDuXrwOPeXY.jpg" alt="User Avatar" />
        </div>
        <Card.Content>
        <div class="header">project</div>
          <Card.Meta>
            <span className="date">
              <Card.Header style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {address}
              </Card.Header>
            </span>
          </Card.Meta>
          <Card.Description>
            <Link  route={`/campaigns/${address}`}>
              <a style={{ color: 'black' }}>  View Campaign</a>
            </Link>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span>
            <i className="user icon"></i>
            75 Members
          </span>
        </Card.Content>
      </Card>
    ));

    return <Card.Group>{cards}</Card.Group>;
  }


  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                secondary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
