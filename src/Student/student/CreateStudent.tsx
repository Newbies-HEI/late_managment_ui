import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    DateInput,
} from 'react-admin'

export function CreateStudent() {
    return (
        <Create resource='student'>
            <SimpleForm>
                <TextInput source='Name' label="Noms"/>
                <TextInput source='FirstName' label="Prénoms"/>
                <TextInput source='Ref' label='Référence'/>
                <TextInput source='Email' />
                <DateInput source='Date' label="Date de paiement"/>
                <BooleanInput source='Paye' label="Facture"/>
            </SimpleForm>
        </Create>
    )
}