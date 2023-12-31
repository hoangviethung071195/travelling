'use client';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, CardContent, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import Title from '../typography/title/title';
import XSText from '../typography/xs-text/xs-text';
import styles from './offer.module.scss';

export default function OfferItem(props: PropsWithChildren<{
  title: string;
  description: string;
  ratingStars: number;
  days: number;
}>) {

  const {
    title,
    description,
    ratingStars,
    days,
  } = props;

  return (
    <CardContent>
      <Title title={title}></Title>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Box className={styles['footer']}>
        <Box className={styles['rate-star-icons']}>
          <StarBorderIcon></StarBorderIcon>
          <StarBorderIcon></StarBorderIcon>
          <StarBorderIcon></StarBorderIcon>
          <StarBorderIcon></StarBorderIcon>
          <StarBorderIcon></StarBorderIcon>
          <XSText text={ratingStars + ' reviews'}></XSText>
        </Box>
        <Box className={styles['review-number']}>
          <AccessTimeIcon></AccessTimeIcon> <XSText text={days + ' days'} sx={{ display: 'inline-block' }}></XSText>
        </Box>
      </Box>
    </CardContent>
  );
}
