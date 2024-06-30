import React, { useState, useEffect } from 'react';
import { Box, Text } from '../../../Components/Index';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PriceGraph = ({ price_list, height, showTooltip = false, showtick = false }) => {
    const [graphData, setGraphdata] = useState([])
    useEffect(() => {
        if (price_list) {
            const formattedData = price_list.map((value, index) => ({
                date: `D ${index + 1}`,
                value,
            }));
            setGraphdata(formattedData)
        }
    }, [price_list])

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#2451B7" stopOpacity={0.05} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="date" tick={showtick ? { fontSize: 12 } : false} />
                <YAxis tick={showtick ? { fontSize: 12 } : false} />
                {showTooltip && <Tooltip content={<CustomTooltip />} />}
                <Area type="monotone" dataKey="value" stroke="#22d3ee" fill="url(#color)" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

function CustomTooltip({ active, payload, label }) {
    if (active) {
        return (
            <Box className="bg-gray-800 text-sm text-slate-300 rounded-lg font-semibold px-4 py-4">
                <Text>Price : ${payload[0].value.toFixed(3)} USD</Text>
                {/* <Text>
                    24 Hr Volume :{" "}
                    {parseFloat(payload[0].payload.volume_24h).toLocaleString("en-US")}{" "}
                </Text>
                <Text>
                    Market Cap :{" "}
                    {parseFloat(payload[0].payload.market_cap).toLocaleString("en-US")}{" "}
                    USD
                </Text> */}
            </Box>
        );
    }
    return null;
}

export default PriceGraph