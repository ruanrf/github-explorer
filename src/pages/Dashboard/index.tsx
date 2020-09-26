import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import profileImg from '../../assets/profile.jpeg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  // FC = FunctionComponent
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on Github</Title>

      <Form>
        <input placeholder="enter repo name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="http://test.com">
          <img
            src="https://avatars0.githubusercontent.com/u/35734605?s=400&u=113de9e321d987d8381a2d6dfb1bafa63c1ecc1e&v=4"
            alt="Github Profile"
          />
          <div>
            <strong>ruanrf/webscrapper-folha</strong>
            <p>
              Web scraper built using Python, in order to construct text
              corporas from "Folha de São Paulo".
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="http://test.com">
          <img
            src="https://avatars0.githubusercontent.com/u/35734605?s=400&u=113de9e321d987d8381a2d6dfb1bafa63c1ecc1e&v=4"
            alt="Github Profile"
          />
          <div>
            <strong>ruanrf/webscrapper-folha</strong>
            <p>
              Web scraper built using Python, in order to construct text
              corporas from "Folha de São Paulo".
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="http://test.com">
          <img
            src="https://avatars0.githubusercontent.com/u/35734605?s=400&u=113de9e321d987d8381a2d6dfb1bafa63c1ecc1e&v=4"
            alt="Github Profile"
          />
          <div>
            <strong>ruanrf/webscrapper-folha</strong>
            <p>
              Web scraper built using Python, in order to construct text
              corporas from "Folha de São Paulo".
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
