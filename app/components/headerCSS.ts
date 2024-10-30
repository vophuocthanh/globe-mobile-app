import { StyleSheet } from "react-native";

export const stylesHeader = StyleSheet.create({
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
    drawer: {
        position: "absolute",
        top: 50,
        left: 10,
        width: "55%",
        height: "70%",
        backgroundColor: "#D9D9D9",
        zIndex: 1000,
        borderRadius: 20,

    },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "black"
    },
    activeItem: {
        backgroundColor: "#FF5733",
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    inactiveItem: {
        backgroundColor: "white",
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
    }, FindTour: {
        position: "absolute",
        top: 32,
        left: 15
    },
    FindFlight: {
        position: "absolute",
        top: 34,
        left: 15
    },
    FindStays: {
        position: "absolute",
        top: 34,
        left: 15
    },
    Advise: {
        position: "absolute",
        top: 34,
        left: 15
    },
    avatarDrawer:{
        position: "absolute",
        top: 50,
        right: 10,
        width: "55%",
        height: "50%",
        backgroundColor: "#D9D9D9",
        zIndex: 1000,
        borderRadius:20,
      },
      LogOut:{
        position: "absolute",
        top:32,
        left:20,
        paddingLeft:30
        },

});