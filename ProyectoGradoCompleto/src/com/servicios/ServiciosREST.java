package com.servicios;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Serializable;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.google.gson.Gson;




@Path("/servicios") 
public class ServiciosREST {
	/////URL: http://localhost:8080/ProyectoGrado/rest/servicios/conexion
	@POST
	@Path("/conexion")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getConexion(){
		Gson gson = new Gson();
		String prueba = "Probando";
		System.out.println(prueba);
		return Response.ok().entity(prueba).build();
	}
	
	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/datos")
	public String uploadLicenseFile(File archivo) 
	{
		String respuesta;
	    try 
	    {
	    	/*FileOutputStream sal = new FileOutputStream("Procesos");*/
	    	File miDir = new File(System.getProperty("user.dir")+"\\Procesos\\"+archivo.getName());

	        try {
	          System.out.println ("Directorio actual: " + miDir.getAbsolutePath());
	        }
	     catch(Exception e) {
	         e.printStackTrace();
	         }

	    	archivo.renameTo(miDir);
	    	System.out.println("Nombre: "+archivo.getAbsoluteFile()+" o: "+archivo.getPath());
	    	 /*OutputStream salida=new FileOutputStream(archivo);
	    	 salida.flush();
	    	 salida.close();*/
	    	 
	    	respuesta = "El archivo "+archivo.getName()+ " se guardó correctamente";
	    	
	    }
	    catch (Exception ex) 
	    {
	        System.out.println("Upload failed: " + ex.getMessage());
	        respuesta="Fallo";
	    }
	    return respuesta;
	}
	
	public void InputStreamAFile(InputStream entrada){
		 try{
		   File f=new File("Archivo.txt");
		   OutputStream salida=new FileOutputStream(f);
		   byte[] buf =new byte[1024];
		int len;
		   while((len=entrada.read(buf))>0){
		      salida.write(buf,0,len);
		   }
		   salida.close();
		   entrada.close();
		   System.out.println("Se realizo la conversion con exito");
		  }catch(IOException e){
		    System.out.println("Se produjo el error : "+e.toString());
		  }
		}
	
}
