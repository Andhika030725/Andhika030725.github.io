
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const selesai =
    typeof status === 'string' &&
    status.toLowerCase() === 'selesai';

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.topLine,
          selesai ? styles.greenLine : styles.orangeLine,
        ]}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>
              {selesai ? '✓' : '◷'}
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.label}>TASK OVERVIEW</Text>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View
            style={[
              styles.badge,
              selesai ? styles.badgeSelesai : styles.badgeProses,
            ]}
          >
            <View
              style={[
                styles.dot,
                selesai ? styles.dotGreen : styles.dotOrange,
              ]}
            />
            <Text
              style={[
                styles.statusText,
                selesai ? styles.textGreen : styles.textOrange,
              ]}
            >
              {selesai ? 'Selesai' : 'Proses'}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.75}
          >
            <Text style={styles.buttonText}>Lihat Detail  →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E8E9DC',
    elevation: 2,
  },
  topLine: {
    height: 5,
  },
  greenLine: {
    backgroundColor: '#739B75',
  },
  orangeLine: {
    backgroundColor: '#E6A15C',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 18,
  },
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#EDF2E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#527B59',
  },
  titleContainer: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    color: '#82917A',
    fontWeight: 'bold',
    letterSpacing: 1.4,
    marginBottom: 5,
  },
  title: {
    fontSize: 15,
    color: '#303D32',
    fontWeight: '700',
    lineHeight: 21,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 9,
    gap: 6,
  },
  badgeSelesai: {
    backgroundColor: '#E5F2E4',
  },
  badgeProses: {
    backgroundColor: '#FFF0DE',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  dotGreen: {
    backgroundColor: '#4C8A52',
  },
  dotOrange: {
    backgroundColor: '#D9822B',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  textGreen: {
    color: '#367342',
  },
  textOrange: {
    color: '#B86A1C',
  },
  button: {
    backgroundColor: '#527B59',
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
