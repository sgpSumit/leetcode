import { StyleSheet, Text, View } from 'react-native';

export function DailyChallenge({ title, difficulty, tags }) {
    return (
        <View style={styles.card}>
            <Text style={styles.heading}>Daily Challenge</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.difficulty}>{difficulty}</Text>
            <View style={styles.tags}>
                {tags.map(tag => (
                    <View key={tag} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                ))}
            </View>
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
        marginBottom: 10,
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        color: '#1e293b',
        marginBottom: 8,
    },
    difficulty: {
        alignSelf: 'flex-start',
        backgroundColor: '#fef3c7',
        color: '#92400e',
        fontSize: 12,
        fontWeight: '700',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 999,
        marginBottom: 12,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    tag: {
        backgroundColor: '#e2e8f0',
        borderRadius: 999,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    tagText: {
        color: '#334155',
        fontSize: 12,
        fontWeight: '600',
    },
});
