import { Box, FlatList } from 'native-base';
import React from 'react';
import colors from '../../../theme/colors';
import data from './data';
import LeaveListCard from './LeaveListCard';

const LeaveList = () => {
    return (
        <FlatList
        mt={"5"}
            data={data}
            renderItem={({ item ,index}) => <LeaveListCard item={item} index={index} />}
            keyExtractor={index => index.toString()}
            showsVerticalScrollIndicator={false}
            bg={colors.primaryLight}
            borderTopLeftRadius={"30"}
            borderTopRightRadius={"30"}
            /> 
    );
};

export default LeaveList;