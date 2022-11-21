package com.ctrujial.proyectocs5;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private EditText edidTextUserName;
    private  EditText  edidTextPassword;
    private Button buttonIniciar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initView();
    }
    // inciar componentes de la vista
    private void initView(){
        edidTextUserName = findViewById(R.id.edidTextUserName);
        edidTextPassword = findViewById(R.id.edidTextPassword);
        buttonIniciar = findViewById(R.id.buttonIniciar);

        buttonIniciar.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        funtionInintSection();
                    }
                }
        );
    }

    private void funtionInintSection(){
        String userName = edidTextUserName.getText().toString();
        String password = edidTextPassword.getText().toString();

        if (userName.contentEquals("ctrujial") && password.contentEquals("123")){
            //edidTextUserName.setError(null);
            Toast.makeText( MainActivity.this, "wellcome to pokemon world!!",Toast.LENGTH_LONG).show();
            pokedex();
        }else {
            Toast.makeText( MainActivity.this, "usuario o contraseña incorrecto",Toast.LENGTH_LONG).show();
            //edidTextUserName.setError(" error");
        }
    }
// para ir a otra vista
    private void pokedex(){
        // se crea una transaccion
        Intent transaction = new Intent(this, pokedexActivity.class);
        //se ejecuta la transaccion
        startActivity(transaction);
    }
}