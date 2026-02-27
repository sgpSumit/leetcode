import { useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const CARDINAL_DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

function normalizeHeading(value) {
    const normalized = ((value % 360) + 360) % 360;
    return Number(normalized.toFixed(1));
}

function getDirectionLabel(heading) {
    const index = Math.round(normalizeHeading(heading) / 45) % 8;
    return CARDINAL_DIRECTIONS[index];
}

export default function App() {
    const [heading, setHeading] = useState(0);
    const [rawInput, setRawInput] = useState('0');

    const direction = useMemo(() => getDirectionLabel(heading), [heading]);

    const rotate = step => {
        const nextValue = normalizeHeading(heading + step);
        setHeading(nextValue);
        setRawInput(String(nextValue));
    };

    const applyHeading = () => {
        const parsedValue = Number.parseFloat(rawInput);
        if (Number.isNaN(parsedValue)) {
            setRawInput(String(heading));
            return;
        }

        const nextValue = normalizeHeading(parsedValue);
        setHeading(nextValue);
        setRawInput(String(nextValue));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Magnetic Needle</Text>
            <Text style={styles.subtitle}>Set a bearing and read the direction instantly.</Text>

            <View style={styles.compassCard}>
                <View style={styles.compassDial}>
                    <Text style={styles.northMarker}>N</Text>
                    <View style={[styles.needle, { transform: [{ rotate: `${heading}deg` }] }]} />
                    <View style={styles.needleCenter} />
                </View>

                <Text style={styles.direction}>{direction}</Text>
                <Text style={styles.degrees}>{Math.round(heading)}°</Text>

                <View style={styles.controls}>
                    <Pressable style={styles.button} onPress={() => rotate(-15)}>
                        <Text style={styles.buttonText}>-15°</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => rotate(15)}>
                        <Text style={styles.buttonText}>+15°</Text>
                    </Pressable>
                </View>

                <View style={styles.manualEntry}>
                    <TextInput
                        keyboardType="numeric"
                        value={rawInput}
                        onChangeText={setRawInput}
                        onBlur={applyHeading}
                        style={styles.input}
                        placeholder="0 - 359"
                    />
                    <Pressable style={styles.applyButton} onPress={applyHeading}>
                        <Text style={styles.applyText}>Apply</Text>
                    </Pressable>
                </View>
            </View>

            <StatusBar style="dark" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#0f172a',
    },
    subtitle: {
        marginTop: 8,
        marginBottom: 24,
        textAlign: 'center',
        color: '#334155',
        fontSize: 15,
    },
    compassCard: {
        width: '100%',
        maxWidth: 360,
        borderRadius: 24,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        padding: 24,
        shadowColor: '#0f172a',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 16,
        elevation: 4,
    },
    compassDial: {
        width: 220,
        height: 220,
        borderRadius: 110,
        borderWidth: 8,
        borderColor: '#dbeafe',
        backgroundColor: '#eff6ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    northMarker: {
        position: 'absolute',
        top: 18,
        fontSize: 22,
        fontWeight: '800',
        color: '#0f172a',
    },
    needle: {
        width: 6,
        height: 92,
        borderRadius: 999,
        backgroundColor: '#ef4444',
    },
    needleCenter: {
        position: 'absolute',
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#0f172a',
    },
    direction: {
        fontSize: 42,
        fontWeight: '800',
        color: '#0f172a',
    },
    degrees: {
        fontSize: 24,
        fontWeight: '700',
        color: '#0369a1',
        marginTop: 4,
    },
    controls: {
        marginTop: 16,
        flexDirection: 'row',
        gap: 12,
    },
    button: {
        backgroundColor: '#0ea5e9',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '700',
    },
    manualEntry: {
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    input: {
        minWidth: 100,
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        fontSize: 15,
        color: '#0f172a',
    },
    applyButton: {
        backgroundColor: '#0f172a',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 10,
    },
    applyText: {
        color: '#ffffff',
        fontWeight: '700',
    },
});
