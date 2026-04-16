import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../../styles/global";

//O TaskCard representa cada tarefa na lista; recebe os dados de uma tarefa e as funções para editar e excluir como props.

export default function TaskCard({ item, onDelete, onEdit }) {
	const priorityColor = theme.colors.priority[ item.priority ] || theme.colors.textSub; //buca a cor correspondente à prioridade, ou usa uma cor padrão

	return(
		<View style={ [ styles.card, {
			borderLeftColor: priorityColor
		}] }>
			<View style={ { flex: 1 } }>
				<Text style={ styles.title }>
					{ item.title }
				</Text>
				<Text style={ styles.description }>
					{ item.description }
				</Text>
				<Text style={ [ styles.badge, {
					color: priorityColor
				}] }>
					• { item.priority }
				</Text>
				<Text style={ styles.date }>
					{ item.start } - { item.end }
				</Text>
			</View>

			<View style={ styles.action }>
				<TouchableOpacity onPress = { onEdit }>
					<Text style={ styles.icon }>

					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress = { onDelete }>
					<Text style={ styles.icon }>

					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
