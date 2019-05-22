import React, { FunctionComponent } from 'react';
import { Heading, Typography } from '@mycrypto/ui';
import { ALL_DERIVATION_PATHS, DerivationPath } from '../../../../constants';
import { chunk } from '../../../../utils';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../../store';
import { Row } from 'styled-bootstrap-grid';
import Path from './Path';

interface StateProps {
  derivationPaths: DerivationPath[];
}

type Props = StateProps;

const Paths: FunctionComponent<Props> = ({ derivationPaths }) => (
  <>
    <Heading as="h3">Derivation paths</Heading>
    <Typography>Choose the derivation paths to search in.</Typography>
    {chunk(ALL_DERIVATION_PATHS, 3).map((paths, index) => (
      <Row key={index}>
        {paths.map(path => (
          <Path key={path.prefix} path={path} isSelected={derivationPaths.includes(path)} />
        ))}
      </Row>
    ))}
  </>
);

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  derivationPaths: state.search.derivationPaths
});

export default connect(mapStateToProps)(Paths);