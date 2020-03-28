import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as MailCompose from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá CAIOAMA, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$ 120,00.';
    const number = '5511000000000';

    function navigationBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailCompose.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: ['caio@gmail.com'],
            body: message
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>CAIOAMA</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}