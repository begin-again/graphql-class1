import React from 'react';
import styled from '@emotion/styled';
import { widths, colors } from '../styles';
import PropTypes from 'prop-types';

/**
 * Content Section component renders content (mainly text/mdown based)
 * for course detail and lesson detail
 */
const ContentSection = ({ children }) => {
  return <ContentDiv>{children}</ContentDiv>;
};

ContentSection.propTypes = {
  children: PropTypes.string
};
export default ContentSection;

/** ContentSection styled component */
const ContentDiv = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: widths.textPageWidth,
  width: '100%',
  alignSelf: 'center',
  backgroundColor: colors.background,
});
