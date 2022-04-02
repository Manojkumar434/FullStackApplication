package backend.poc.first.POC1BackEnd;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class Resource 
{
	private int Id;
	private String fname;
	private int young;
	private float sal;
	private String city1;
	private List<String> yes=new ArrayList<String>();
	
	//ToString
	@Override
	public String toString() {
		return "Resource [Id=" + Id + ", fname=" + fname + ", young=" + young + ", sal=" + sal + ", city1=" + city1
				+ ", yes=" + yes + "]";
	}
	
	//Constructor
	public Resource(String fname, int young, float sal, String city1, List<String> yes) {
		super();
		this.fname = fname;
		this.young = young;
		this.sal = sal;
		this.city1 = city1;
		this.yes = yes;
	}
	
	//getter setter method-Encapsulation
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public int getYoung() {
		return young;
	}
	public void setYoung(int young) {
		this.young = young;
	}
	public float getSal() {
		return sal;
	}
	public void setSal(float sal) {
		this.sal = sal;
	}
	public String getCity1() {
		return city1;
	}
	public void setCity1(String city1) {
		this.city1 = city1;
	}
	public List<String> getYes() {
		return yes;
	}
	public void setYes(List<String> yes) {
		this.yes = yes;
	}
}
