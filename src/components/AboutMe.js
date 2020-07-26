import React from 'react';
import styled from 'styled-components';
import { SubPageContainer } from '../styles';
import { device } from '../device';
import imgNyc1 from '../images/nyc-1.jpg';
import imgBos1 from '../images/bos-1.jpg';
import imgNeu from '../images/neu.jpg';
import imgTaipei from '../images/taipei.jpg';
import mark43Icon from '../images/mark43.png';
import datadogIcon from '../images/datadog.png';
import tripadvisorIcon from '../images/tripadvisor.png';

class AboutMe extends React.Component {

  render() {
    return (
      <SubPageContainer>
        <TitleContainer>
          <BorderImage src={imgNyc1} />
          <BorderImage src={imgBos1} />
          <BorderImage src={imgNeu} />
          <BorderImage src={imgTaipei} />
          <h1>About Me</h1>
        </TitleContainer>
        <ContentContainer>
          <div class="row">
            <div class="col-6">
              <Mark43Image class="center"/>
            </div>
            <div class="col-6">
              <h2>DevOps Engineer, Mark43</h2>
              <p>Team: Platforms (Intern), CloudOps</p>
              <p>Jun. 2019 - Aug. 2019 (Intern), Apr. 2020 - Present</p>
              <ul>
                <li>
                  Maintain AWS infrastructure with Terraform, Terragrunt, and Ansible
                </li>
                <li>
                  Build Azure infrastructure using Terraform and Helm on Kubernetes
                </li>
                <li>
                  Support and automate CI/CD pipelines using Spinnaker, Atlantis, Github Actions, and Argo
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="col-6">
              <h2>Software Engineering Intern, Datadog</h2>
              <p>Team: Security Development</p>
              <p>Aug. 2019 - Dec. 2019</p>
              <ul>
                <li>
                  Automate API key rotation with AWS Lambda, encrypt using AWS KMS and store revoked keys in PostgreSQL in RDS and SSM
                </li>
                <li>
                  Automate Datadog agent credential rotation
                </li>
                <li>
                  Build HashiCorp Vault plugin for dynamic Datadog keys, using Consul-templates to rewrite config file upon rotation
                </li>
              </ul>
            </div>
            <div class="col-6">
              <DatadogImage class="center"/>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="col-6">
              <TripadvisorImage class="center"/>
            </div>
            <div class="col-6">
              <h2>CorpIT Operations Engineer Co-op, TripAdvisor</h2>
              <p>Team: CorpIT Operations</p>
              <p>Jul. 2018 - Dec. 2018</p>
              <ul>
                <li>
                  Improve real-time monitoring of Palo Alto VPN and Pulse VPN usage through Grafana
                </li>
                <li>
                  Automate status report jobs using Kubernetes and PowerShell scripts
                </li>
                <li>
                  Automate onboarding/offboarding process using PowerShell scripts
                </li>
              </ul>
            </div>
          </div>
        </ContentContainer>
      </SubPageContainer>
    )
  }
};

const TitleContainer = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

const ContentContainer = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const BorderImage = styled.img`
  width: 25%;
  max-height: 100px;
  padding: 0px;
  object-fit: cover;
  @media ${device.tablet} {
    max-height: 80px;
  }
  @media ${device.mobile} {
    max-height: 50px;
  }
`;

const CompanyImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Mark43Image = styled(CompanyImage)`
  content: url(${mark43Icon});
  max-width: 200px;
  padding-top: 50px;
`;

const DatadogImage = styled(CompanyImage)`
  content: url(${datadogIcon});
  max-width: 150px;
  padding-top: 50px;
`;

const TripadvisorImage = styled(CompanyImage)`
  content: url(${tripadvisorIcon});
  max-width: 250px;
  padding-top: 50px;
`;

export default AboutMe;