package com.cadastro.backend.models;

public class Student {
  private int id;
  private String firstName;
  private String lastName;
  private String adress;
  private String cep;
  private String neighborhood;
  private String city;
  private String stat;

  public Student() {
  }

  public Student(int id, String firstName, String lastName, String adress, String cep, String neighborhood, String city,
      String stat) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.adress = adress;
    this.cep = cep;
    this.neighborhood = neighborhood;
    this.city = city;
    this.stat = stat;
  }

  public String getFirstName() {
    return firstName;
  }
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }
  public String getLastName() {
    return lastName;
  }
  public void setLastName(String lastName) {
    this.lastName = lastName;
  }
  public String getAdress() {
    return adress;
  }
  public void setAdress(String adress) {
    this.adress = adress;
  }
  public String getCep() {
    return cep;
  }
  public void setCep(String cep) {
    this.cep = cep;
  }
  public String getNeighborhood() {
    return neighborhood;
  }
  public void setNeighborhood(String neighborhood) {
    this.neighborhood = neighborhood;
  }
  public String getCity() {
    return city;
  }
  public void setCity(String city) {
    this.city = city;
  }
  public String getStat() {
    return stat;
  }
  public void setStat(String stat) {
    this.stat = stat;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  
}
