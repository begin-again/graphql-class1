import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

/**
 * Markdown component is a simple style wrapper for markdown content used across our app
 */
const MarkDown = ({ content }) => {
  // eslint-disable-next-line react/no-children-prop
  return <StyledMarkdown children={content} />;
};

MarkDown.propTypes = {
  content: PropTypes.shape({
    children: PropTypes.string
  })
};
export default MarkDown;

/** Markdown styled components */
const StyledMarkdown = styled(ReactMarkdown)({
  color: colors.grey.darker,

  h1: {
    fontSize: '1.7em',
  },
  h2: {
    fontSize: '1.4em',
  },
  h3: {
    fontSize: '1.2em',
  },
  a: {
    color: colors.pink.base,
  },
  pre: {
    padding: 20,
    borderRadius: 4,
    border: `solid 1px ${colors.silver.dark}`,
    backgroundColor: colors.silver.base,
    code: {
      fontSize: '0.9em',
    },
  },
});
