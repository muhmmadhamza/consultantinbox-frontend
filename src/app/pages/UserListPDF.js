import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  // PDFViewer,
  // PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  date: {
    textAlign: "right",
    fontSize: 12,
    marginBottom: 8,
  },
  tableTitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 12,
  }, 
  tableHeaderCell: {
    borderWidth: 0.5,
    borderColor: "#000",
    flex: 1,
    padding: 5,
    backgroundColor: "#333",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14
  },
  table: {
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    borderWidth: 0.5,
    // borderColor: "#000",
    borderColor: "#ccc",
    flex: 1,
    padding: 5,
    fontSize: 12
  },
});

const UserListPDF = ({ users, roles }) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>          
            <Text style={styles.date}>
              Dated: {month}-{day}-{year}
            </Text>
            <Text style={styles.tableTitle}>User List </Text>          
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableHeaderCell}>
                <Text>Name</Text>
              </View>
              <View style={styles.tableHeaderCell}>
                <Text>Phone Number</Text>
              </View>
              <View style={styles.tableHeaderCell}>
                <Text>Role</Text>
              </View>
              <View style={styles.tableHeaderCell}>
                <Text>Verified</Text>
              </View>
            </View>
            {users.map((user) => (
              <View key={user.id} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text>{user.name}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{user.phone}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>
                    {roles.find((role) => role.id === user?.role_id)?.name}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{user.is_verified ? "Yes" : "No"}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default UserListPDF;
