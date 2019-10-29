import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import api from '~/services/api';
import { Container, List } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          perPage: 2,
          page,
        },
      });

      setMeetups([...meetups, ...response.data.data]);
      setRefreshing(false);
    }
    if (loading) {
      loadMeetups();
      setLoading(false);
    }
  }, [loading, meetups, page]);

  function refreshList() {
    console.tron.log('refresh');
    setRefreshing(true);
    setPage(1);
    setLoading(true);
    setMeetups([]);
  }

  function loadMore() {
    setPage(page + 1);
    setLoading(true);
  }

  return (
    <Background>
      <Container>
        <List
          onEndReachedThreshold={0.2}
          onEndReached={loadMore}
          onRefresh={refreshList}
          refreshing={refreshing}
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Meetup data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
