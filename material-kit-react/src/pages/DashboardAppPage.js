import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import cloudData from '../dashboardData';

import db from '../firebaseConfig';
// ----------------------------------------------------------------------

// const { users, orders, products } = cloudData;

export default function DashboardAppPage() {
  const theme = useTheme();

  const [data, setData] = useState([]);

  const [userList, setUserList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);
  const [productList, setProductList] = useState([]);

  const [foodData, setFoodData] = useState([]);
  const [menuChartData, setMenuChartData] = useState([]);

  const getFirebaseData = () => {
    const q = query(collection(db, 'User'));
    onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot.docs);
      setUserList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      console.log(userList);
    });
    const r = query(collection(db, 'Orders'));
    onSnapshot(r, (querySnapshot) => {
      console.log(querySnapshot.docs);
      setOrderList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      console.log(orderList);
    });

    const s = query(collection(db, 'feedback'));
    onSnapshot(s, (querySnapshot) => {
      console.log(querySnapshot.docs);
      setFeedbackList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );

      console.log(feedbackList);
    });

    const t = query(collection(db, 'product'));
    onSnapshot(t, (querySnapshot) => {
      console.log(querySnapshot.docs);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setProductList(data);
      // console.log(productList);
    });

    onSnapshot(query(collection(db, 'menu')), (querySnapshot) => {
      // console.log(querySnapshot.docs);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setFoodData(data);
      setMenuChartData(getColumnSummary(data, 'category'));
      console.log(productList);
    });
  };
  useEffect(() => {
    getFirebaseData();
  }, []);

  const getColumnSummary = (data, column) => {
    const chartData = {};
    const chartData2 = [];

    // for (const obj of data) {
    //   if (chartData.includes(obj[column])) {
    //     chartData[obj[column]] += 1;
    //   } else {
    //     chartData[obj[column]] = 1;
    //   }
    // }
    data.forEach(({id, data}) => {
      if (Object.keys(chartData).includes(data[column])) {
        chartData[data[column]] += 1;
      } else {
        chartData[data[column]] = 1;
      }
    });

    Object.entries(chartData).forEach((pair) => {
      chartData2.push({ label: pair[0], value: pair[1] });
    });
    console.log(chartData2);
    return chartData2;
  };

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Users" total={userList.length} icon={'/user.png'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Orders" total={orderList.length} color="error" icon={'/order.png'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Products" total={productList.length} color="error" icon={'/product.png'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Feedback"
              total={feedbackList.length}
              color="error"
              icon={'ant-design:bug-filled'}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Menu Categories"
              chartData={menuChartData}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
