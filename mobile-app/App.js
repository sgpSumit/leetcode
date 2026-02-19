import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ProgressCard } from './src/components/ProgressCard';
import { DailyChallenge } from './src/screens/DailyChallenge';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>LeetCode Companion</Text>
                <Text style={styles.subtitle}>Track progress and stay consistent</Text>
            </View>

            <View style={styles.content}>
                <ProgressCard solved={128} streak={14} ranking="Top 10%" />
                <DailyChallenge
                    difficulty="Medium"
                    title="Longest Substring Without Repeating Characters"
                    tags={['Hash Table', 'Two Pointers', 'Sliding Window']}
                />
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#0f172a',
    },
    subtitle: {
        marginTop: 6,
        fontSize: 15,
        color: '#475569',
    },
    content: {
        gap: 14,
    },
});
