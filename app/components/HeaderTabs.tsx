import { Menu } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Avatar, Button, Searchbar } from 'react-native-paper';

export default function HeaderTabs() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isAvatarDrawerOpen, setIsAvatarDrawerOpen] = useState(false);

    const toggleAvatarDrawer = () => {
        setIsAvatarDrawerOpen(!isAvatarDrawerOpen);
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.headerContainer}>
                <Menu />
                <Text style={styles.title}>Tên</Text>
                <TouchableOpacity onPress={toggleAvatarDrawer}>
                    <Avatar.Image
                        size={36}
                        source={require("../../assets/images/Avatar.png")}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="Tìm kiếm"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={styles.searchbar}
                />
                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={() => console.log('Pressed')}
                >
                    Tìm kiếm
                </Button>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 10,
        paddingBottom: 20, // Thêm khoảng cách phía dưới để tách biệt với các phần tử khác
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12, // Thay đổi padding cho header
        paddingHorizontal: 15, // Thêm padding ngang
        backgroundColor: '#ffffff',
        elevation: 4,
        borderRadius: 10,
        marginBottom: 15, // Thêm khoảng cách dưới header
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center', // Căn giữa tiêu đề
        flex: 1, // Đảm bảo tiêu đề chiếm không gian giữa
    },
    searchContainer: {
        alignItems: 'center',
    },
    searchbar: {
        borderColor: '#ddd',
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 2, // Đổ bóng cho thanh tìm kiếm
        paddingHorizontal: 10, // Thêm padding cho nội dung thanh tìm kiếm
    },
    button: {
        marginTop: 10,
        backgroundColor: '#FF5733',
        borderRadius: 10,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center', // Căn giữa nội dung trong nút
        height: 40, // Thay đổi chiều cao của nút
        elevation: 3, // Thêm độ nổi cho nút
    },
    buttonText: {
        color: '#ffffff', // Màu chữ cho nút
        fontWeight: 'bold', // Đậm cho chữ
    },
});
