/**
 * @file Timestamp component.
 */

import React, { useEffect } from 'react';

import useTimestampProvider from '../hooks/use-timestamp-provider';

const Timestamp = () => {
  const [timestamp, fetchTimestamp] = useTimestampProvider();

  useEffect(() => {
    fetchTimestamp();
  }, []);

  return (
      <p>Timestamp: {timestamp}</p>
  );
};

export default Timestamp;
