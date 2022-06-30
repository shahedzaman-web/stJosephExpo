import { Box, FlatList } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import AppHeader from '../../../components/AppHeader';
import { useGetEmployeeEventQuery } from '../../../store/services/teacherApi';
import colors from '../../../theme/colors';
// import data from './data';
import EventCard from './EventCard';
const Events = () => {
    const [eventsData, setEventsData] = React.useState([]);
    const branchId  = useSelector((state) => state.auth.userInfo.branch._id);
    const {isLoading, data,error} =useGetEmployeeEventQuery(branchId)
    React.useEffect(() => {
        if (data !== undefined) {
            setEventsData(data[0].data);
        }
    }, [data]);
    return (
        <Box flex={1}>
            <AppHeader title="Events" />
                <FlatList
                    mt={"6"}
                    pt="4"
                    refreshing={isLoading}
                    data={eventsData}
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