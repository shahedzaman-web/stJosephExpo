import { Box, FlatList } from 'native-base';
import React from 'react';
import AppHeader from '../../../components/AppHeader';
import colors from '../../../theme/colors';
import data from './data';
import EventCard from './EventCard';
const Events = () => {
    return (
        <Box flex={1}>
            <AppHeader title="Events" />
                <FlatList
                    mt={"6"}
                    pt="4"
                    data={data}
                    renderItem={({item, index}) => <EventCard item={item} index={index} />}
                    keyExtractor={item => item.title}
                    showsVerticalScrollIndicator={false}
                    bg={colors.primaryLight}
                    borderTopLeftRadius={'30'}
                    borderTopRightRadius={'30'}
                />
        </Box>
    );
};

export default Events;