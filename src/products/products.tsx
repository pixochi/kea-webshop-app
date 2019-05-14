import React from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';

import Spinner from '../components/spinner';
import { Flex } from '../components/styleguide/layout';
import { Title, Body } from '../components/styleguide/text';

import { RootState } from '../redux/root-reducer';
import styled from '../components/styleguide';
import { s8 } from '../components/styleguide/spacing';

import * as Actions from './actions';

const ProductContainer = styled(Flex)`
  background-color: ${props => props.theme.invertedText};
  width: 30%;
  border-radius: 3px;
  padding: 20px 32px;
  margin-top: 24px;
  height: 400px;
  max-height: 400px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

interface StateProps {
  isFetching: boolean;
  products: Array<{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating: number;
  }>;
}

type Props = StateProps;

class Products extends React.PureComponent<Props> {

  public componentDidMount() {
    Actions.fetchProducts.dispatch();
  }

  public render() {
    const {
      isFetching,
      products,
    } = this.props;

    if (isFetching) {
      return (
        <Spinner margined centered />
      );
    }

    return (
      <Flex wrap="wrap" direction="row" justify="space-around" marginBottom={s8}>
        {products.map(product => (
          <ProductContainer direction="column">
            <Title>{product.name}</Title>
            <img height="150" src={product.image} />
            <Body disabled>{product.description}</Body>
          </ProductContainer>
        ))}
      </Flex>
    );
  }

};

export default compose(
  connect((state: RootState): StateProps => ({
    isFetching: state.products.isFetching,
    products: state.products.products,
  })),
)(Products);
