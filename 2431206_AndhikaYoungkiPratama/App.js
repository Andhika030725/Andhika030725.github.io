
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
} from 'react-native';

import InfoCard from './src/components/InfoCard';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

const AVATAR_COLORS = [
  '#E4EDDC',
  '#F6E5D6',
  '#DDEBE7',
  '#F1E3C9',
  '#E9E1F0',
];

const AVATAR_TEXT = [
  '#527B59',
  '#B87342',
  '#39766A',
  '#9A7135',
  '#80669C',
];

export default function App() {
  const [keyword, setKeyword] = useState('');

  const mahasiswaFilter = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  const renderMahasiswa = ({ item }) => {
    const index = DAFTAR_MAHASISWA.findIndex(
      (m) => m.id === item.id
    );

    const initials = item.nama
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    return (
      <TouchableOpacity
        style={styles.studentCard}
        activeOpacity={0.75}
        onPress={() =>
          Alert.alert(
            'Profil Mahasiswa',
            `Nama: ${item.nama}\nProgram Studi: ${item.prodi}`
          )
        }
      >
        <View
          style={[
            styles.avatar,
            { backgroundColor: AVATAR_COLORS[index] },
          ]}
        >
          <Text
            style={[
              styles.initials,
              { color: AVATAR_TEXT[index] },
            ]}
          >
            {initials}
          </Text>
        </View>

        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>{item.nama}</Text>
          <Text style={styles.prodi}>{item.prodi}</Text>
        </View>

        <View style={styles.arrowBox}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F6EF"
      />

      <FlatList
        data={mahasiswaFilter}
        keyExtractor={(item) => item.id}
        renderItem={renderMahasiswa}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>S.</Text>
              </View>

              <View style={styles.headerInfo}>
                <Text style={styles.eyebrow}>STUDENT WORKSPACE</Text>
                <Text style={styles.appTitle}>Campus Notes</Text>
                <Text style={styles.subtitle}>
                  Kelola tugas, kenali progresmu.
                </Text>
              </View>
            </View>

            {/* Section soal 1 */}
            <View style={styles.sectionHeader}>
              <View>
                <Text style={styles.sectionNumber}>01 / COMPONENT</Text>
                <Text style={styles.sectionTitle}>Daftar Tugas</Text>
              </View>

              <View style={styles.countBadge}>
                <Text style={styles.countText}>02 TASKS</Text>
              </View>
            </View>

            <InfoCard
              title="Pengerjaan Proyek UTS React Native"
              status="selesai"
              onPress={() =>
                Alert.alert(
                  'Detail Tugas',
                  'Proyek UTS React Native telah selesai.'
                )
              }
            />

            <InfoCard
              title="Integrasi API & Dokumentasi Laporan"
              status="proses"
              onPress={() =>
                Alert.alert(
                  'Detail Tugas',
                  'Integrasi API dan dokumentasi sedang dikerjakan.'
                )
              }
            />

            {/* Section soal 2 */}
            <View style={styles.sectionHeader}>
              <View>
                <Text style={styles.sectionNumber}>02 / DIRECTORY</Text>
                <Text style={styles.sectionTitle}>
                  Direktori Mahasiswa
                </Text>
              </View>

              <View style={styles.countBadge}>
                <Text style={styles.countText}>
                  {mahasiswaFilter.length} DATA
                </Text>
              </View>
            </View>

            {/* Search bar */}
            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>⌕</Text>

              <TextInput
                style={styles.input}
                placeholder="Cari nama mahasiswa..."
                placeholderTextColor="#93988C"
                value={keyword}
                onChangeText={setKeyword}
                autoCapitalize="none"
                autoCorrect={false}
              />

              {keyword.length > 0 && (
                <TouchableOpacity
                  onPress={() => setKeyword('')}
                  activeOpacity={0.7}
                >
                  <Text style={styles.clearButton}>×</Text>
                </TouchableOpacity>
              )}
            </View>

            <Text style={styles.helperText}>
              PILIH MAHASISWA UNTUK MELIHAT PROFIL
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyIcon}>⌕</Text>
            <Text style={styles.emptyTitle}>
              Data tidak ditemukan!
            </Text>
            <Text style={styles.emptySubtitle}>
              Coba kata kunci nama yang berbeda.
            </Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            <View style={styles.footerLine} />
            <Text style={styles.footerText}>
              MADE FOR LEARNING · EXPO
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6EF',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 25,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 32,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#527B59',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerInfo: {
    flex: 1,
  },
  eyebrow: {
    color: '#779078',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.8,
    marginBottom: 4,
  },
  appTitle: {
    color: '#303D32',
    fontSize: 25,
    fontWeight: '800',
  },
  subtitle: {
    color: '#7D8577',
    fontSize: 12,
    marginTop: 4,
  },

  // Section headings
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 4,
  },
  sectionNumber: {
    color: '#82917A',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  sectionTitle: {
    color: '#303D32',
    fontSize: 20,
    fontWeight: '800',
  },
  countBadge: {
    backgroundColor: '#E7EDDF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  countText: {
    color: '#527B59',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Search
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E4E6DA',
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  searchIcon: {
    color: '#527B59',
    fontSize: 27,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 14,
    color: '#303D32',
  },
  clearButton: {
    color: '#527B59',
    fontSize: 25,
    paddingHorizontal: 5,
  },
  helperText: {
    color: '#93988C',
    fontSize: 9,
    letterSpacing: 1,
    marginBottom: 12,
  },

  // Student cards
  studentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8E9DC',
    marginBottom: 11,
    gap: 12,
    elevation: 1,
  },
  avatar: {
    width: 49,
    height: 49,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontSize: 14,
    fontWeight: '800',
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    color: '#303D32',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  prodi: {
    color: '#82887B',
    fontSize: 12,
  },
  arrowBox: {
    width: 29,
    height: 29,
    borderRadius: 10,
    backgroundColor: '#F0F3E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    color: '#527B59',
    fontSize: 23,
    lineHeight: 25,
  },

  // Empty state
  emptyBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E9DC',
  },
  emptyIcon: {
    fontSize: 36,
    color: '#82917A',
    marginBottom: 8,
  },
  emptyTitle: {
    color: '#303D32',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptySubtitle: {
    color: '#82887B',
    fontSize: 12,
    marginTop: 7,
    textAlign: 'center',
  },

  // Footer
  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  footerLine: {
    width: 40,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#B9C9AE',
    marginBottom: 12,
  },
  footerText: {
    color: '#92988A',
    fontSize: 9,
    letterSpacing: 1.8,
  },
});
