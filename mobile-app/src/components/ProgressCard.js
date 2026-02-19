import { StyleSheet, Text, View } from 'react-native';

export function ProgressCard({ solved, streak, ranking }) {
    return (
        <View style={styles.card}>
            <Text style={styles.heading}>Your Snapshot</Text>
            <View style={styles.row}>
                <Metric label="Solved" value={solved} />
                <Metric label="Streak" value={`${streak} days`} />
                <Metric label="Ranking" value={ranking} />
            </View>
        </View>
    );
}

function Metric({ label, value }) {
    return (
        <View style={styles.metric}>
            <Text style={styles.metricValue}>{value}</Text>
            <Text style={styles.metricLabel}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#0f172a',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 12,
        elevation: 2,
    },
    heading: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0f172a',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    metric: {
        flex: 1,
        backgroundColor: '#f1f5f9',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 8,
        alignItems: 'center',
    },
    metricValue: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1e293b',
    },
    metricLabel: {
        marginTop: 4,
        fontSize: 12,
        color: '#64748b',
    },
});
