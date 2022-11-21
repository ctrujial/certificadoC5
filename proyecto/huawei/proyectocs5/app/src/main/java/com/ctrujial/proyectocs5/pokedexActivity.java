package com.ctrujial.proyectocs5;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.ctrujial.proyectocs5.entities.Pokemon;

import java.util.ArrayList;

public class pokedexActivity extends AppCompatActivity {
    //declacion de componentes
    private ImageView imageViewPokemon;
    private TextView textViewPokemonName;
    private TextView textViewPokemonDescription;
    private Button buttonsiguiente;
    private Button buttonanterior;

    //atributos
    private ArrayList<Pokemon> lstPokemon = new ArrayList<>();
    private int currenIndex = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_activityhuawei);
        //coneccion al api
        lstPokemon = getPokemons();// simulacion
        //iniciar vista
        initView();
    }

    private void initView(){
        imageViewPokemon = findViewById(R.id.imageViewPokemon);
        textViewPokemonName = findViewById(R.id.edidTextUserName);
        textViewPokemonDescription = findViewById(R.id.textViewPokemonDescription);
        buttonanterior = findViewById(R.id.buttonanterior);
        buttonsiguiente = findViewById(R.id.buttonsiguiente);

        buttonsiguiente.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        if (currenIndex < lstPokemon.size()-1)
                        currenIndex++;
                        setCurrentPokemon(currenIndex);
                    }
                }
        );
        buttonanterior.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        if (currenIndex > 0){
                            currenIndex--;
                            setCurrentPokemon(currenIndex);
                        }

                    }
                }
        );

        //setCurrentPokemon(currenIndex);
    }

    private void setCurrentPokemon(int index){
        imageViewPokemon.setImageResource(lstPokemon.get(index).getImage());
        textViewPokemonName.setText(lstPokemon.get(index).getName());
        textViewPokemonDescription.setText(lstPokemon.get(index).getDescription());
    }

    //para importar la api bd
    private ArrayList<Pokemon> getPokemons(){
        ArrayList<Pokemon> newPokemons = new ArrayList<>();
        newPokemons.add(new Pokemon("squartule", "aca esta el tercer pokemon", R.drawable.squartule));
        newPokemons.add(new Pokemon("charizard", "aca esta el primer pokemon", R.drawable.charizard));
        newPokemons.add(new Pokemon("balbusaur", "aca esta el segundo pokemon", R.drawable.balbusaur));



        return newPokemons;
    }

}